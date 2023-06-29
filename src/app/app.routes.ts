import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'herramienta',
    loadComponent: () => import('./herramienta/herramienta.page').then( m => m.HerramientaPage)
  },
  {
    path: 'prediccion-genero',
    loadComponent: () => import('./prediccion-genero/prediccion-genero.page').then( m => m.PrediccionGeneroPage)
  },
  {
    path: 'prediccion-edad',
    loadComponent: () => import('./prediccion-edad/prediccion-edad.page').then( m => m.PrediccionEdadPage)
  },
  {
    path: 'universidades',
    loadComponent: () => import('./universidades/universidades.page').then( m => m.UniversidadesPage)
  },
  {
    path: 'clima',
    loadComponent: () => import('./clima/clima.page').then( m => m.ClimaPage)
  },
  {
    path: 'pagina-word-press',
    loadComponent: () => import('./pagina-word-press/pagina-word-press.page').then( m => m.PaginaWordPressPage)
  },
  {
    path: 'acercade',
    loadComponent: () => import('./acercade/acercade.page').then( m => m.AcercadePage)
  },
];
