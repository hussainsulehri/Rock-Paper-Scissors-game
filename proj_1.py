# ----->>>> Snake Water Gun Game <<<<<-----
import random

computer = random.choice([1,0,-1])
you_s = input(f"------>>>>select r for rock and p for paper and s for scissors<<<<<------\nEnter your choice : ")
you_dict = {"r":1, "p":-1, "s":0}
reverse_dict = {1:"rock",-1:"paper",0:"scissors"}

you = you_dict[you_s]

comp_choice = reverse_dict[computer]
you_choice = reverse_dict[you]

print(f"You choose {you_choice}, and computer choose {comp_choice}")

if(computer == you):
    print("It's a tie!")
else:
    # if((computer == 1 and you == -1) or (computer == -1 and you == 0) or (computer == 0 and you == 1)):
    #     print("You win!")
    # elif((computer == -1 and you == 1) or (computer == 0 and you == -1) or (computer == 1 and you == 0)):
    #     print("You lose!")
    # else:
    #     print("Invalid input, please try again.")
    
    if((computer - you) == -1 or (computer - you) == 2):
        print("You win!")
    else:
        print("You lose!")
        