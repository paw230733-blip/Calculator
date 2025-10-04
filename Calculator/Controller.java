package Calculator;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController

@CrossOrigin("http://localhost:5174/")

public class Controller {
    @GetMapping("/Add")
    public String addValue(@ReqestBody CalValue CalValue){
        CalValueImp CalValueImp= new calValueImp();
        return calValueImp.addValue(calValue);
    }
@GetMapping ("/substract")
public String substract(@RequestBody CalValue calValue){
    CalValueImp calValueImp= new calValue();
    return calValueImp.subtract(calVlaue);
}
@GetMapping ("/Division")
public String substract(@RequestBody CalValue calValue){
    calValueImp calValueImp= new calValue();
      if (calValue.getA()==0)calValue.setA(1);
               if (calValue.getB()==0)calValue.setB(1);
               if (calValue.getC()==0)calValue.setC(1);
               if (calValue.getD()==0)calValue.setD(1);
    return calValueImp.Division(calVlaue);
}
@GetMapping ("/multiply")
public String multiply(@RequestBody CalValue calValue){
               if (calValue.getA()==0)calValue.setA(1);
               if (calValue.getB()==0)calValue.setB(1);
               if (calValue.getC()==0)calValue.setC(1);
               if (calValue.getD()==0)calValue.setD(1);
    calValueImp calValueImp= new calValue();
    return calValueImp.multiply(calVlaue);
}
@PostMapping("/create")
public String create(calValue)

}
