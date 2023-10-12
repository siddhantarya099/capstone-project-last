package com.Natwest.springbootbankingFAQ;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class SpringbootBankingFaqApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBankingFaqApplication.class, args);
	}

}
