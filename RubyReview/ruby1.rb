# p [2, 4, 6].all? { |el| el.even? }
# p [2, 3, 6].all? { |el| el.even? }

# puts [1,3,4].any? {|ele| ele.even?}



# puts "string" == :string


# MES = "yes"
# def repeat(message, num=1)
#     message * num
# end

# def say_bye
#     message = "bye"
#     3.times do 
#         p message
#     end
# end

# puts say_bye

# def compress_str(str)
#     compress = ""
#     i = 0
#     while i < str.length
#         char = str[i]
#         count = 0
#         while char == str[i]
#             count += 1
#             i += 1
#         end
#         compress += (count.to_s + char)
#     end

#     compress
# end

# p compress_str("aaabbbccccc")

def add_and_proc(num1, num2, &prc)

    sum = num1 + num2

    prc.call(sum)
end

p add_and_proc(1,2) {|ele| ele += 2}