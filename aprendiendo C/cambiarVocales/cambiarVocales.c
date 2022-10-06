#include <stdlib.h>
#include <stdio.h>
#include <err.h>
#include <string.h>

int
main (int argc, char *argv[]){

    if (argc != 4)
        errx(EXIT_FAILURE,"ERROR: Usage is ./cambiarVocales [string] [char1] [char2]");
        
    argc--;
    argv++;
    
    char *string = argv[0];
    char c1 = argv[1][0];
    char c2 = argv[2][0];
    
    for (int i = 0; i < strlen(string); i++){
        if (string[i] == c1)
            string[i] = c2;
    }
    
    printf("%s ", string);
    
    exit(EXIT_SUCCESS);
}
