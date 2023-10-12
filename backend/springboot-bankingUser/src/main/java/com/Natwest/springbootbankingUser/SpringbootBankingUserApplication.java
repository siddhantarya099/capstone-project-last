package com.Natwest.springbootbankingUser;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class SpringbootBankingUserApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBankingUserApplication.class, args);
	}

}
