#include <stdlib.h>
#include <stdio.h>
#include <err.h>
#include <sys/types.h>
#include <unistd.h>
#include <string.h>


int
main(int argc, char *argv[]){

    char *bin_dir = "/bin/";
    
    if (argc == 1)
        err(EXIT_FAILURE, "ERROR: Usage is ./ej2 [command] [arg1] ... [argN]");
        
    argc--;
    argv++;
        
    switch(fork()){
        case -1:
            err(EXIT_FAILURE, "fork failed!");
        case 0:
            strcat(bin_dir, argv[0]);
            execl("/bin/echo", "echo", "hola", NULL);
            err(EXIT_FAILURE, "exec failed!");
        default:
            printf("Child created \n");
    }
    
    exit(EXIT_SUCCESS);
}

