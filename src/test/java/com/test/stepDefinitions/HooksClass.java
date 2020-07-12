package com.test.stepDefinitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class HooksClass {

	@Before("@smoketest")
	public void runBeforeSmoke() {
		System.out.println("Hook Before Smoke");
	}

	@After("@smoketest")
	public void runAfterSmoke() {
		System.out.println("Hook After Smoke");
	}

	@Before("@regressiontest")
	public void runBeforeReg() {
		System.out.println("Hook Before Reg");
	}

	@After("@regressiontest")
	public void runAfterReg() {
		System.out.println("Hook After reg");
	}
}
