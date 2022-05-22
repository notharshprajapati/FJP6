#include <stdio.h>

int main()
{
    int windowsize, i, sent, ack;
    printf("Enter number of frames ");
    scanf("%d", &windowsize);

    for (i = 0; i < windowsize; i++)
    {
        sent = i;
        printf("Frame %d is sent \n", sent);
        printf("Last acknowledgement recieved? ");
        scanf("%d", &ack);

        if (ack != sent)
        {
            i--;
            continue;
        }
    }
    return 1;
}