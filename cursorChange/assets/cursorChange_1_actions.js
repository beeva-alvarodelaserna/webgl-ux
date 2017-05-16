var flwebgl;
(function (flwebgl) {
	(function (actions) {
		actions.sc_Escena321_0_0 = function() {
			/* Cursor de ratón personalizado
			Reemplaza el cursor de ratón predeterminado por la instancia del símbolo especificado.
			*/
			
			//Obtener una referencia al objeto en el escenario con su nombre de instancia
			this.cursor_mc = this.getChildByName("cursor_mc");
			this.cubo1 = this.getChildByName("cubo1");
			this.cubo2 = this.getChildByName("cubo2");
			this.cubo3 = this.getChildByName("cubo3");
			
			canvas.style.cursor = "none";
			
			canvas.onmousemove = function hover(e) {
				this.cursor_mc.setPosition(e.offsetX, e.offsetY);
			
				//
				
				var c1 = this.cubo1.getBounds(this);
			var c2 = this.cubo2.getBounds(this);
				var c3 = this.cubo3.getBounds(this);
				
				if (isMouseOverSymbol(e.offsetX, e.offsetY, c1)) {
					// Inicio del código personalizado
					// Este código de ejemplo muestra una alerta con las palabras "Mouse clicked".
			
					this.cursor_mc.gotoAndStop("target")
			
					// Fin del código personalizado
				} else if (isMouseOverSymbol(e.offsetX, e.offsetY, c2)) {
					// Inicio del código personalizado
					// Este código de ejemplo muestra una alerta con las palabras "Mouse clicked".
			
					this.cursor_mc.gotoAndStop("hand")
			
					// Fin del código personalizado
				} else if (isMouseOverSymbol(e.offsetX, e.offsetY, c3)) {
					// Inicio del código personalizado
					// Este código de ejemplo muestra una alerta con las palabras "Mouse clicked".
			
					this.cursor_mc.gotoAndStop("rubish")
			
					// Fin del código personalizado
				}else {
					this.cursor_mc.gotoAndStop(1)
				}
			
				
			
			}.bind(this);
			
			//Función para definir la posición del objeto MovieClip en los valores x e y especificados
			this.cursor_mc.setPosition = function (x, y) {
				var txObject = this.getLocalTransform();
				var txValues = txObject.getValues();
				txValues[4] = x;
				txValues[5] = y;
				txObject.setValues(txValues);
				this.setLocalTransform(txObject);
			}
			//Para restaurar el puntero de ratón predeterminado, quite los comentarios de las líneas siguientes:
			/*canvas.onmousemove = null;
			this.removeChild(this.cursor_mc);
			canvas.style.cursor = "default";
			*/
			
			
			//Función para comprobar si el punto especificado se encuentra dentro del rectángulo.
			function isMouseOverSymbol(pointX, pointY, rect) {
				if (rect.left <= pointX && pointX <= rect.left + rect.width)
					if (rect.top <= pointY && pointY <= rect.top + rect.height)
						return true;
			
				return false;
			}
		}
		actions.mc_cube1_0_0 = function() {
			this.stop();
			
		}
		actions.mc_cursor_0_0 = function() {
			this.stop();
			
		}
		actions.mc_cursor_0_4 = function() {
			this.stop();
			
		}
		actions.mc_cursor_0_9 = function() {
			this.stop();
			
		}
		actions.mc_cursor_0_14 = function() {
			this.stop();
			
		}
	})(flwebgl.actions || (flwebgl.actions = {}));
})(flwebgl || (flwebgl = {}));
