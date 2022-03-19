package br.edu.utfpr.controller;

import dto.PaisDTO;
import java.util.ArrayList;
import java.util.List;
import model.Pais;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


    @RestController
    @RequestMapping("/pais")
    public class PaisController implements GenericController<Pais, PaisDTO, Integer>{
             
        @Override
        @PostMapping
        public Pais creat(PaisDTO entity) {
            return new Pais();
        }

        @Override
        public Pais update(Integer id, PaisDTO entity) {
            return new Pais();
        }

        @Override
        public List<Pais> getAll() {

            return new ArrayList<>();
        }
        
    }
    

