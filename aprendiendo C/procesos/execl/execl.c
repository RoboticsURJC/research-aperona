#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
#include <err.h>



int
main(int argc, char *argv[]){

    printf("Hello! \n");
    
    execl("/bin/ls", "myls", "/tmp", NULL);
    
    printf("Bye! \n");
    
    exit(EXIT_FAILURE);
}
