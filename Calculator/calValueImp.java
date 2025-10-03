package Calculator;

public class calValueImp implements calService {

    @Override
    public String addValue (Calculator.calValue calValue) {
        double sum = calValue.getA()+ calValue.getB()+ calValue.getC()+ calValue.getD()+ calValue.getE()+calValue.getF();
        return "This is the sum "+sum;
        
    }
       

    @Override
    public String subtract(CalValue calValue) {
        double subtract = calValue.getA()-calValue.getB()-calValue.getC()-calValue.getD()-calValue.getE()-calValue.getF();
        return " This is the substract"+subtract;
        
    }

    @Override
    public String mulultiply(calValue calValue) {
       double mulultiply = calValue.getA()* calValue.getB()* calValue.getC()*calValue.getD()*calValue.getE()*calValue.getF();
       return " this is your multiply" +mulultiply;
    }

    @Override
    public String Division(Calculator.calValue calValue) {
        double Division = calValue.getA()/ calValue.getB()/calValue.getC()/calValue.getD()/calValue.getE()/calValue.getF();
        return " this is your division "+Division;
       
    }

    @Override
    public String create(calValue calValue) {
       return " created value a="+
              calValue.getA()+
           "b"+calValue.getB() + 
          "c"+ calValue.getC()+ 
          "d"+ calValue.getD()+
         "e"+ calValue.getE()+
          " f"+ calValue.getF();
    
    }
    
}
