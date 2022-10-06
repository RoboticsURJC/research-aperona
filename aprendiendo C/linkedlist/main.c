#include <stdlib.h>
#include <stdio.h>
#include "lists.h"
#include <string.h>



List *l;

int main(int argc, char *argv[]){
    Coor p;
    
    p.x = 4;
    p.y = 5;
    
    strcpy(p.tag, "hola");
    
    l = createList();
    if (isEmpty(l)) 
        printf("vacia\n"); 
    exit(EXIT_FAILURE);
}
