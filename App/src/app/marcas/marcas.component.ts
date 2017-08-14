import { Component, OnInit } from '@angular/core';
import{ MarcasService } from './marcas.service';
import { Marcas } from './classMarca';
declare var alertify: any;

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  marcas: any[] = [];
  marca: Marcas;
  editando:boolean;

  constructor(public marcasService:MarcasService) { }

  ngOnInit() {
    this.getMarcas();
    this.marca = new Marcas();
    this.editando = false;
  }

  actionMarca(marca:Marcas){
    if(marca.Nombre === undefined){
      alertify.alert("Es necesario un nombre de marca", function(){});
    }else{
      if(marca.Id_Marca === undefined){
        this.guardarMarca(marca);
      }else{
        this.editarMarca(marca);
      }
      this.clearMarca();      
    }
  }

  guardarMarca(marca:Marcas){
    this.marcasService.postMarca(marca).subscribe(m => {
      this.getMarcas();
    });
    alertify.success('Marca: '+marca.Nombre+' Guardada');
  }

  editarMarca(marca:Marcas){
    this.marcasService.putMarca(marca).subscribe(m => {
      this.getMarcas();
    });
    alertify.success('Marca: '+marca.Nombre+' Editada');
  }

  borrarMarca(marca){
    var service = this;
    alertify.confirm("¿Esta seguro de eliminar "+marca.nombre+"?",
    function(){
      service.marcasService.deleteMarca(marca.id_marca).subscribe(m => {
          service.getMarcas();
          alertify.success(marca.nombre+' Eliminada');  
      },
      error => {
        alertify.warning('No se puede Eliminar, Compruebe la integirdad de los datos.'); 
      });
    },
    function(){});
  }

  editar(edit_marca){
    this.marca.Id_Marca = edit_marca.id_marca;
    this.marca.Nombre = edit_marca.nombre;
    this.editando = true;
  }

  private getMarcas(){
    this.marcasService.getMarcas().subscribe(m => {
      this.marcas = m;
    });
  }

  clearMarca(){
    this.marca.Id_Marca = undefined;
    this.marca.Nombre = undefined;
    this.editando = false;
  }

}