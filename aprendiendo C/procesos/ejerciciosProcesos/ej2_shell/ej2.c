#include <stdlib.h>
#include <stdio.h>
#include <err.h>
#include <sys/types.h>
#include <unistd.h>
#include <string.h>


int
main(int argc, char *argv[]){

    char bin_dir[1024] = "/bin/";
    
    if (argc == 1)
        err(EXIT_FAILURE, "ERROR: Usage is ./ej2 [command] [arg1] ... [argN]");
        
    argc--;
    argv++;
    strcat(bin_dir, argv[0]);
      
    switch(fork()){
        case -1:
            err(EXIT_FAILURE, "fork failed!");
        case 0:
            printf("I am child \n");
            execl(bin_dir, argv[0], argv[1], NULL);
        default:
            printf("Child created \n");
    }
    
    
    exit(EXIT_SUCCESS);
}

