import os
os.system("cls")
def calcular_equacao_2_grau(a, b, c):   
    Δ = (b ** 2) - 4 * a * c
    print("delta  é =",Δ)
    if  a==0:
        print("Não é equação do 2 grau se a=0")
    elif Δ<0:
            print("delta não admite raíz real por ser negativo") 
    elif Δ==0 :
        raiz_Δ = Δ**(1/2)
        x1 = (-b+raiz_Δ)/(2*a)
        print(f"Para Δ=0 temos x1={x1:.2f} e x2={x1:.2f}")
    else: 
        raiz_Δ = Δ**(1/2)
        x1 = (-b+raiz_Δ)/(2*a)
        x2 = (-b-raiz_Δ)/(2*a)
        print(f"o valor de x' é: {x1:.2f} e o valor de x'' é: {x2:.2f}") 


try:
    a = float(input("digite o valor de a "))
    b = float(input("digite o valor de b "))
    c = float(input("digite o valor de c "))
    calcular_equacao_2_grau(a,b,c)
except ValueError:
        print("Dados inválidos") 