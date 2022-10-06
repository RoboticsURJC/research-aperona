#include <stdlib.h>
#include <stdio.h>
#include "lists.h"


List *createList(void){
    List *aux;
    
    aux = malloc(sizeof(List));
    aux->first = NULL;
    
    return aux;
}

int isEmpty(List *l){
    return (l->first == NULL);
}
