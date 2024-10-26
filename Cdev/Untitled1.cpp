#include <stdio.h>
main()
{
float hora, horaM,salario,ir,inss,sindicato,liquido;
printf("Informe quanto ganha por hora :\n");
scanf("%f", &hora);
printf("Informe quantas horas trabalhou no mes :\n");
scanf("%f", &horaM);
	salario = hora * horaM;
	printf("Salario Bruto : R$%.2f\n", salario);
	printf("IR : R$%.2f\n", ir =salario*0.11);
	printf("INSS : R$%.2f\n", inss =salario*0.08);
	printf("Sindicato : R$%.2f\n", sindicato =salario*0.05);
	printf("Salario Liquido eh de : R$%.2f\n", salario-ir-inss-sindicato);
	
}
