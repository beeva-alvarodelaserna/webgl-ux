var flwebgl;
(function (flwebgl) {
	(function (actions) {
		actions.sc_Escena321_0_0 = function() {
			/* Añadir instancia desde la biblioteca en el escenario
			Añade una instancia del símbolo MovieClip especificado en el escenario. 
			
			Instrucciones:
			1 Añade "LibrarySymbol" como la propiedad de vinculación del símbolo.
			2 Si quiere añadir un símbolo distinto desde la biblioteca,
			proporcione un nombre de vinculación al símbolo de biblioteca y utilice el mismo nombre a continuación.
			*/
			
			var symbolLinkageName = "cursor"; /* Cambiar aquí */
			
			var sgFactory = player.getScenegraphFactory();
			var cursorAdded = sgFactory.createMovieClipInstance(symbolLinkageName);
			cursorAdded.setName("nCursor")
			this.addChild(cursorAdded);
			
			
			/* Cursor de ratón personalizado
			Reemplaza el cursor de ratón predeterminado por la instancia del símbolo especificado.
			*/
			
			//Obtener una referencia al objeto en el escenario con su nombre de instancia
			this.nCursor = this.getChildByName("nCursor");
			
			canvas.style.cursor = "none";
			
			canvas.onmousemove = function hover(e) {
				this.nCursor.setPosition(e.offsetX, e.offsetY);
			//	traigo de la biblioteca el cursor animado
				var symbolLinkageName = "cursorA"; /* Cambiar aquí */
				var sgFactory = player.getScenegraphFactory();
				var cursorAAdded = sgFactory.createMovieClipInstance(symbolLinkageName);
				cursorAAdded.setName("ncursorA")
				this.addChild(cursorAAdded);
				
				this.ncursorA = this.getChildByName("ncursorA");
				this.ncursorA.setPosition = function (x, y) {
					var txObject = this.getLocalTransform();
					var txValues = txObject.getValues();
					txValues[4] = x;
					txValues[5] = y;
					txObject.setValues(txValues);
					this.setLocalTransform(txObject);
				}
				this.ncursorA.setPosition(e.offsetX, e.offsetY);
			}.bind(this);
			
			//Función para definir la posición del objeto MovieClip en los valores x e y especificados
			this.nCursor.setPosition = function (x, y) {
				var txObject = this.getLocalTransform();
				var txValues = txObject.getValues();
				txValues[4] = x;
				txValues[5] = y;
				txObject.setValues(txValues);
				this.setLocalTransform(txObject);
			}
			//Para restaurar el puntero de ratón predeterminado, quite los comentarios de las líneas siguientes:
			/*canvas.onmousemove = null;
			this.removeChild(this.nCursor);
			canvas.style.cursor = "default";
			*/
			
		}
		actions.mc_cursorAnimado_0_4 = function() {
			this.setVisible(false);
		}
		actions.mc_cursorAnimado_0_5 = function() {
			this.getParent().removeChild(this)
		}
		actions.mc_cursor_0_0 = function() {
			
			this.stop();
			
		}
		actions.mc_cursor_0_1 = function() {
			
			this.stop();
			
		}
	})(flwebgl.actions || (flwebgl.actions = {}));
})(flwebgl || (flwebgl = {}));
