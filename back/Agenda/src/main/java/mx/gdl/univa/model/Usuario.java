package mx.gdl.univa.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;

@Entity
@Table(name="users")
public class Usuario implements Serializable {
	
	private static final long serialVersionUID = -1891846470406106066L;

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id")
	private long   Id;
	
	@Column(name="email",    length=100, nullable=false, unique=true)
	private String email;
	
	@Column(name="password", length=255, nullable=false, unique=false)
	private String password;
	
	public long getId() {
		return Id;
	}
	public void setId(long id) {
		Id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
