

typedef struct Coor Coor;
struct Coor{
    int x;
    int y;
    char tag[256];
};


typedef struct Node Node;
struct Node{
    Coor info;
    Node *next;
};


typedef struct List List;
struct List{
    Node *first;
};


List *createList(void);

int isEmpty(List *l);






