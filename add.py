
def even(num1,num2):
    if num1>num2:
        return
    print(num1,end=" ")
    return even(num1+2,num2)
num1=4;num2=15
even(num1,num2)