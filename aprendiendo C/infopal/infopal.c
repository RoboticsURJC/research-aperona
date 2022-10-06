#include <stdlib.h>
#include <stdio.h>
#include <string.h>


int main(int argc, char *argv[]){

    argc--;
    argv++;

    printf("Hay %d argumentos\n", argc);
    
    for (int i = 0; i < argc; i++){
        int len = strlen(argv[i]);
        printf("Palabra %d : %s --> Longitud: %d \n", i, argv[i], len);
        printf("Palabra al revés:");
        for (int j = len; j >= 0; j--){
            printf("%c", argv[i][j]);
        }
        printf("\n");
    }
}



