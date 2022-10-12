#include <stdlib.h>
#include <stdio.h>
#include <err.h>
#include <unistd.h>



int
main(int argc, char *argv[]){

    char *args[3];
    
    args[0] = "myls";
    args[1] = "/tmp";
    args[2] = NULL;
    
    printf("Hello \n");
    execv("/bin/ls", args);
    
    printf("Bye \n");
    exit(EXIT_FAILURE);
}
