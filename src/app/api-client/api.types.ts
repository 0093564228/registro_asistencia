import { Time } from "@angular/common";
import { Data } from "@angular/router";

export type CarreraType = {
    readonly id: number;
    nombre: string;
    facultadDTO: facultadDTO;
};

export type facultadDTO = {
    id: number,
    nombre: string,
    modulo: string;
}
export type MateriaType = {
    id: number,
    nombre: string,
    sigla:string,
    carreraDTO:CarreraType;
}
export type AulaType = {
    id: number,
    nombre: string
}
export type GrupoMateriaType = {
    id: number,
    nombre: string
}
export type UsuarioType = {
    id: number,
    username: string,
    lastname: string,
    firstname:string,
    country:string,
    ci:string,
    telefono:string,
    password:string,
    role:string
}
export type LicenciaType = {
    id: number,
    horario_inicio:Date,
    horario_fin:Date,
    motivo:string,
    userDTO:UsuarioType;
}
export type ProgramacionType = {
    id: number,
    horario_inicio:Date,
    horario_fin:Date,
    dia:string,
    materiaDTO:MateriaType,
    grupoDTO:GrupoMateriaType,
    aulaDTO:AulaType,
    userDTO:UsuarioType;
}
export type AsistenciaType = {
    id: number,
    horario_inicio:Date,
    horario_fin:Date,
    estado: string,
    programacionDTO:ProgramacionType;
}


