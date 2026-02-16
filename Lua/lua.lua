-- make 'a' local to avoid undefined global warning and fix loop to terminate
local a = 5
while a >= 0 do
    print(a)
    a = a - 1
end