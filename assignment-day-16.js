let count=1;
const rows=5;
for(let row=1;row<=5;row++)
{
    if(row === 1)
    console.log(" ".repeat(rows-row)+'*')
    //console.log();
    else
    {
        console.log(" ".repeat(rows-row)+'*'+" ".repeat(count)+"*");
        count+=2;
    }
}
count-=4;
for(let row=4;row>=1;row--)
{
    if(row === 1)
    console.log(" ".repeat(rows-row)+'*')
    //console.log();
    else
    {
        console.log(" ".repeat(rows-row)+'*'+" ".repeat(count)+"*");
        count-=2;
    }
}