class Scan{
    constructor(){

        this.access1 = createInput("Answer 1")
        this.access1.position(150,90)
        this.access1.style('background','white')

        this.button1 = createButton('Check')
        this.button1.position(150,110)
        this.button1.style('background','yellow')


        this.access2 = createInput("Answer 2")
        this.access2.position(150,210)
        this.access2.style('background','white')

        this.button2 = createButton('Check')
        this.button2.position(150,230)
        this.button2.style('background','yellow')


        this.access3 = createInput("Answer 3")
        this.access3.position(150,330)
        this.access3.style('background','white')

        this.button3 = createButton('Check')
        this.button3.position(150,350)
        this.button3.style('background','yellow')



        /*this.access4 = createInput("answer 4")
        this.access1.position(150,90)
        this.access1.style('background','white')

        this.button4 = createButton('Check')
        this.button4.position(150,130)
        this.button4.style('background','grey')


        this.access5 = createInput("answer 5")
        this.access5.position(150,220)
        this.access5.style('background','white')

        this.button5 = createButton('Check')
        this.button5.position(150,240)
        this.button5.style('background','grey')


        this.access6 = createInput("answer 6")
        this.access6.position(150,330)
        this.access6.style('background','white')

        this.button6 = createButton('Check')
        this.button6.position(150,350)
        this.button6.style('background','grey')*/
    }

    display(){
        this.button1.mousePressed(() => {
            if(system.check(answer1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        }) 

        this.button2.mousePressed(() => {
            if(system.check(answer2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        }) 

        this.button3.mousePressed(() => {
            if(system.check(answer3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        }) 
    }

    showButtons(){
        this.access1.show();
        this.button1.show();
        this.access2.show();
        this.button2.show();
        this.access3.show();
        this.button3.show();

        //this.access1.value("answer 1");
        //this.access2.value("answer 2");
        //this.access3.value("answer 3");
    }
}

