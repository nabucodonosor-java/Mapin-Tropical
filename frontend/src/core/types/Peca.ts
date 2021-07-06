export type PecaResponse = {
    content: Peca[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
}

export type CategoriaResponse = {
    content: Categoria[];
    totalPages: number;
}

export type MarcaResponse = {
    content: Marca[];
    totalPages: number;
}

export type Peca = {
    id: number;
    imgUrl: string;
    nome: string;
    descricao: string;
    categorias: Categoria[];
    marcas: Marca[];
}

export type Categoria = {
    id: number;
    nome: string;
}

export type Marca = {
    id: number;
    nome: string;
}
