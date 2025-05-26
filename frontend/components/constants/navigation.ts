export interface NavItem {
    id:string,
    name:string,
    href:string,
    icon?: React.ElementType;
}

export const NavigationLinks: NavItem[] = [
    {id: 'home' , name:'Inicio' , href:'/'},
    {id: 'about' , name:'Acerca de mi' , href:'/about'},
    {id: 'contact' , name:'Contacto' , href:'/contact'},
    {id: 'proyectos' , name:'Proyectos' , href:'/projects'}
];