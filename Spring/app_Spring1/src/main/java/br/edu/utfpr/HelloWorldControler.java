package br.edu.utfpr;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
public class HelloWorldControler {
    
    @GetMapping    
    public String ola(){
        return "Olá.... Bem vindo ao projeto com Spring!!!";
    }
    
}
