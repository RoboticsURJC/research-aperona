#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <unistd.h>
#include <err.h>



int
main(int argc, char *argv[]){

    switch (fork()){
        case -1:
            err(EXIT_FAILURE, "fork failed!");
        case 0:
            printf("I am the child! \n");
            break;
        default:
            printf("I am the parent! \n");
    }
    exit(EXIT_SUCCESS);
}

