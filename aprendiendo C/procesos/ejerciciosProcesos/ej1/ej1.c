/*
Escribe un programa en C que tenga un hijo que imprima su PID y duerma (con
sleep(3)) mucho tiempo. Mira c ́omo lo representa el programa pstree. Redirige sus
entradas y salidas a ficheros con dup. Mira su directorio en /proc y en particular
sus descriptores de fichero /proc/PID/fd  
*/

#include <stdlib.h>
#include <stdio.h>
#include <err.h>
#include <sys/types.h>
#include <unistd.h>



int
main (int argc, char *argv[]){

    int pid;

    switch (fork()){
        case -1:
            err(EXIT_FAILURE, "fork failed! \n");
        case 0:
            pid = getpid();
            printf("I am the child and my pid is %d \n", pid);
            sleep(300);
        default:
            printf("I am the parent \n");
    }
    
    exit(EXIT_SUCCESS);
}
