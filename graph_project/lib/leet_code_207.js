// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/


function buildeGraph(list){
    let graph = {}
    list.forEach(prereq => {
        let [course, pre] = prereq.map(String);
        if(!graph[course]){
            graph[course] = [pre]
        }else{
            graph[course].push(pre)
        }

        //if course has no prereq 
        if(!graph[pre]){
            graph[pre] = []
        }
    });
    return graph
}

function canFinish(numCourses, prerequisites) {
    let graph = buildeGraph(prerequisites);
    let total = Object.keys(graph).length
    let completed = new Set()

    let taking = true

    while(taking){
        taking = false
        for(let course in graph){
            let finishpre = graph[course].every(pre => completed.has(pre));
            if(!completed.has(course) && finishpre){
                completed.add(course)
                taking = true
            }
        }
    }

    return completed.size === total
}
