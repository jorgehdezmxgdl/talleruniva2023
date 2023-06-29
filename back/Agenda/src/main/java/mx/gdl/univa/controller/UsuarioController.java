package mx.gdl.univa.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import mx.gdl.univa.model.Usuario;
import mx.gdl.univa.repository.UsuarioRepository;

import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "*")
@RestController
public class UsuarioController {
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	@GetMapping(value="/valida")
	public ResponseEntity<String> valida() {   
	   Optional<Usuario> i = usuarioRepository.findById(1L);	   
	   if (i != null) {
		   return new ResponseEntity<String>(i.get().getEmail(), HttpStatus.OK);
	   } else {
	       return new ResponseEntity<String>("Bien", HttpStatus.OK);
	   }
	}
	
	@GetMapping(value="/valida2")
	public ResponseEntity<String> verifica(@RequestParam("email") String email, @RequestParam("password") String password) {	  
	   Optional<Usuario> i = usuarioRepository.findById(1L);	   
	   if (i != null) {
		   return new ResponseEntity<String>(i.get().getEmail(), HttpStatus.OK);
	   } else {
	       return new ResponseEntity<String>("Bien", HttpStatus.OK);
	   }
	}
	
	@GetMapping(value="/adiciona")
	public Usuario inserta() {
	    Usuario a = new Usuario();
	    a.setEmail("correo1@yahoo.com");
	    a.setPassword("123451");
	    Usuario i = usuarioRepository.save(a);
	    return i;
	    
	}
}
