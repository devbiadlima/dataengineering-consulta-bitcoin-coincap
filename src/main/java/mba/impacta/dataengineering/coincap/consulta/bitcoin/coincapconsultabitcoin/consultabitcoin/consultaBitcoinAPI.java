package mba.impacta.dataengineering.coincap.consulta.bitcoin.coincapconsultabitcoin.consultabitcoin;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("consulta-cotacao")
public class consultaBitcoinAPI {


    @GetMapping
    public  bitcoinResultDTO consultaBitcoin (){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<bitcoinResultDTO> resp =
                restTemplate.
                        getForEntity(
                                "https://api.coincap.io/v2/assets/bitcoin", bitcoinResultDTO.class);
        return resp.getBody();
    }
}
