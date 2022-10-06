#include <stdlib.h>
#include <stdio.h>
#include <err.h>
#include <string.h>
#include <ctype.h>



int
esVocal(char letra){
    char letraMinus = tolower(letra);
    char vocales[] = "aeiou";
    
    for (int i = 0; i < strlen(vocales); i++){
        if (vocales[i] == letraMinus) 
            return 1;
    }
    return 0;
}


int
tieneVocal(char *palabra){

    for (int i = 0; i < strlen(palabra); i++){
        if (esVocal(palabra[i]))
            return 1;
    }
    
    return 0;

}


char** insertionSort(char *palabras[], int index){

    int i = 1;
    while (i < index){
        int j = i;
        while ((j > 0) && (palabras[j-1] > palabras[j])){
            palabras[j] = palabras[j - 1];
            j--;
        } 
        i++;
    }

    return palabras;

}


void sort( char* array[], int index){
    int i;
    int j;
    char *c;

    i = 1;
    while (i < index){
        c = array[i];
        j = i - 1;
        while ((j >= 0) && (strcmp(array[j], c)) > 0){
            array[j + 1] = array[j];
            j--;
        }
        array[j+1] = c;
        i++;
    }
}


int
main(int argc, char *argv[]){

    
    char **newArray;
    
    int arrayIndex = 0;

    if (argc < 2)
        errx(EXIT_FAILURE, "ERROR: Usage is ./sortstr word1 word2 ...");
        
    
    for (int i = 1; i < argc; i++){
        if (tieneVocal(argv[i])) {
            arrayIndex++;
        }
    }
    
    newArray = malloc(sizeof(char*)*arrayIndex);
    
    int j = 0;
    for (int i = 1; i < argc; i++){
        if (tieneVocal(argv[i])) {
            newArray[j] = argv[i];
            j++;
        }
    }
    
    sort(newArray, arrayIndex);
    for (int i = 0; i < arrayIndex; i++)
        printf("%s ", newArray[i]);
    printf("\n");
    
    
    free(newArray);
    exit(EXIT_SUCCESS);
    
    
}
