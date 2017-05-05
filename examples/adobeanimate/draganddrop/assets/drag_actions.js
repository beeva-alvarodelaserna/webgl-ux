var flwebgl;
(function (flwebgl) {
	(function (actions) {
		actions.sc_Escena321_0_0 = function() {
			
			/* Cursor de ratón personalizado
			Reemplaza el cursor de ratón predeterminado por la instancia del símbolo especificado.
			*/
			
			//Obtener una referencia al objeto en el escenario con su nombre de instancia
			this.movieClip_1 = this.getChildByName("movieClip_1");
			
			canvas.style.cursor = "none";
			
			canvas.onmousemove = function hover(e) {
			    this.movieClip_1.setPosition(e.offsetX, e.offsetY);
			}.bind(this);
			
			//Función para definir la posición del objeto MovieClip en los valores x e y especificados
			this.movieClip_1.setPosition = function (x, y) {
			    var txObject = this.getLocalTransform();
			    var txValues = txObject.getValues();
			    txValues[4] = x; txValues[5] = y;
			    txObject.setValues(txValues);
			    this.setLocalTransform(txObject);
			}
			//Para restaurar el puntero de ratón predeterminado, quite los comentarios de las líneas siguientes:
			/*canvas.onmousemove = null;
			this.removeChild(this.movieClip_1);
			canvas.style.cursor = "default";
			*/
			
			
		}
	})(flwebgl.actions || (flwebgl.actions = {}));
})(flwebgl || (flwebgl = {}));
