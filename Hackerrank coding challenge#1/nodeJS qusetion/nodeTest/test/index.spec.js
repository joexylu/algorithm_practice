const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const sinon = require('sinon');
const BlueBird = require('bluebird');
const middleware = require('../middleware');
const {Request, Response} = require('./mock');
const {find} = require('lodash');

chai.use(chaiHttp);

describe('express_middleware_basics', () => {
    let req, res, next;
    beforeEach(() => {
        req = new Request({
            originalUrl: '/tasks',
            baseUrl: '/tasks',
            path: '/',
            url: '/'
        });
        res = new Response();
        next = sinon.stub()
    });

    it('Should have the trace object in the request', () => {
        middleware(req, res, next);
        req.should.have.property('trace');
    });

    it('Should have property id, timestamp, path in trace object', () => {
        middleware(req, res, next);
        req.trace.should.have.property('id');
        req.trace.should.have.property('timestamp');
        req.trace.should.have.property('path');
    });

    it('Should have a valid path value against the path property', () => {
        middleware(req, res, next);
        req.trace.path.should.equal('/tasks');
    });

    it('Should have a unique id value against the id property', () => {
        let ids = [];
        for (let i = 0; i <= 20; i++) {
            middleware(req, res, next);
            const isDuplicate = find(ids, req.trace.id);
            (!!isDuplicate).should.eql(false);
            ids.push(req.trace.id);
        }
    });

    it('Should have a valid timestamp value in the trace', () => {
        let lastTimeStamp;
        for (let i = 0; i <= 20; i++) {
            middleware(req, res, next);
            if (i !== 0) {
                req.trace.timestamp.should.be.gte(lastTimeStamp);
                req.trace.timestamp.should.be.lte(new Date().getTime());
            }
            lastTimeStamp = req.trace.timestamp;
        }
    });


    it('Should have the middleware mounted on all the /task routes', (done) => {
        const routes = [
            {method: 'get', route: '/tasks/15', middleware: true},
            {method: 'get', route: '/tasks', middleware: true},
            {method: 'post', route: '/tasks', middleware: true},
            {method: 'get', route: '/', middleware: false},
        ];
        BlueBird.mapSeries(routes,
            routeData => {
                return chai.request(server)[routeData.method](routeData.route)
            })
            .then(responses => {
                responses.forEach((response, index) => {
                    const routeData = routes[index];
                    if (routeData.middleware) {
                        response.headers.should.have.property('x-request-id');
                        response.headers['x-request-id'].should.not.eql('null');
                        response.headers['x-request-id'].should.be.not.null;
                        response.headers['x-request-id'].should.be.not.undefined;
                        response.headers['x-request-id'].should.be.not.empty;
                    } else {
                        response.headers.should.not.have.property('x-request-id');
                    }
                });
                done();
            });
    });
});
