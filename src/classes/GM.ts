let instance:GM=null;

export class GM
{
    public isMobile:boolean=false;
    public isPort:boolean=false;
    public isTablet:boolean=false;
    constructor()
    {
        window['gm']=this;
    }
    static getInstance()
    {
        if (instance===null)
        {
            instance=new GM();
        }
        return instance;
    }
}