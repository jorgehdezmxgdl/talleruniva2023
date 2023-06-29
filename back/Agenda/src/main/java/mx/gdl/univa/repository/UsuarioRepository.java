package mx.gdl.univa.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import mx.gdl.univa.model.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {  
	
	Usuario findByEmailAndPassword(String email, String password);
}
