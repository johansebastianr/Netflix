function seleccionarPlan(plan) {
    localStorage.setItem('planSeleccionado', plan);
}

document.addEventListener('DOMContentLoaded', function () {
    const planSeleccionado = localStorage.getItem('planSeleccionado');
    const precioPlan = document.getElementById('precioPlan');
    const planSeleccionadoElement = document.getElementById('planSeleccionado');
    
    if (planSeleccionado) {
        let precio = 0.00;
        
        if (planSeleccionado === 'Básico') {
            precio = 8.99;
        } else if (planSeleccionado === 'Estándar') {
            precio = 13.99;
        } else if (planSeleccionado === 'Premium') {
            precio = 17.99;
        }
        
        planSeleccionadoElement.textContent = `Plan: ${planSeleccionado}`;
        precioPlan.textContent = `Precio: $${precio.toFixed(2)}/mes`;
        
        const totalElement = document.querySelector('.resumen p:last-child');
        totalElement.textContent = `Total: $${precio.toFixed(2)} (primer mes)`;
    }
});
