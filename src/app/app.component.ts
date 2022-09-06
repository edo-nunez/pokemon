import { Component, NgModule } from '@angular/core';
import { HistoriaImagen } from './modelos/historia-imagen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public elementosGuardados: Array<HistoriaImagen> = [];
  public imagen: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/250px-International_Pok%C3%A9mon_logo.svg.png';
  public imagen2: string = 'https://static9.depositphotos.com/94920/1090/i/450/depositphotos_10907008-stock-photo-siberian-cat-sitting-in-front.jpg';

  public escucharHijo(){
    console.log('Hola, dice papá');
  }

  public escucharDetalle(hijo: string){
    console.log('El padre dice ',hijo)
  }

  public agregarNuevo (nuevo: HistoriaImagen): void {
    const id: number = this.elementosGuardados.length + 1;
    nuevo.id = id;
    this.elementosGuardados.push(nuevo);
  }

  public borrarElemento (pos:number): void {
    this.elementosGuardados.splice(pos,1);
    console.log('La posición que se va a eliminar es ', pos);
  }

  public modificarElemento (pos:number): void {
    this.elementosGuardados.shift();
    console.log('La posición que se va a modificar es ', pos);
  }
}
