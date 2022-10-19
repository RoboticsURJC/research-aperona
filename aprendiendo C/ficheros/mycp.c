#include <stdlib.h>
#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <err.h>
#include <unistd.h>



enum{Bufsize = 8 * 1024};


int
main(int argc, char *argv[]){

    
    int fdin;
    int fdout;
    
    int nr;
    
    char buf[Bufsize];


    if (argc != 3)
        errx(1, "Usage: %s [file1] [file2]", argv[0]);
        
    fdin = open(argv[1], O_RDONLY);
    
    if (fdin < 0)
        err(EXIT_FAILURE, "cant open %s", argv[1]);
        
    fdout = open(argv[2], O_WRONLY | O_CREAT | O_TRUNC, 0640); //Si queremos añadir cosas, 0_APPEND
    
    if (fdout < 0)
        err(EXIT_FAILURE, "cant open %s", argv[2]);
    
    
    while ((nr = read(fdin, buf, Bufsize)) != 0){
        
        if (nr < 0)
            err(EXIT_FAILURE, "cant read");
    
        if (write(fdout, buf, nr) != nr)
            err(EXIT_FAILURE, "cant write");
    }
    
    close(fdin);
    close(fdout);

    exit(EXIT_SUCCESS);
}
