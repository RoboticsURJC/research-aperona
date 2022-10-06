#include <stdlib.h>
#include <stdio.h>
#include <string.h>

int main(int argc, char *argv[]){

    argc--;
    argv++;
    
    if (argc == 0){
        fprintf(stderr, "ERROR\n");
        exit(EXIT_FAILURE);
    }
    
    for (int i = 0; i < argc; i++){
        printf("Palabra: %s \n", argv[i]);
        for (int j = i + 1; j < argc; j++){
           printf("Palabra a comparar: %s \n", argv[j]); 
           
        }
    }
    
    exit(EXIT_SUCCESS);
}
