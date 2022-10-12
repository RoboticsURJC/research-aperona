#include <stdlib.h>
#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>
#include <err.h>



int
main(int arg, char *argv[]){

    int x = 13;
    switch (fork()){
        case -1:
            err(EXIT_FAILURE, "Fork failed! \n");
        case 0:
            x = 0;
            printf("I am the child -> x=%d \n", x);
            break;
        default:
            x = 1;
            printf("I am the parent -> x=%d \n", x);
            break;
    }
    printf("Bye bye -> x=%d \n", x);
    
    exit(EXIT_SUCCESS);
}

