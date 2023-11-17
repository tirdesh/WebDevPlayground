 /**
  * A Node represents an HTML Element. A node can have a tag name,
  * a list of CSS classes and a list of children nodes.
  */
 class Node {
 	/**
 	 *
 	 * @param {String} tag the tag name
 	 * @param {Array} children the children nodes
 	 * @param {Array} classes the css classes
 	 * @param {String} id the node id
 	 */
 	constructor(tag, children, classes, id) {
 		// Tag name of the node.
 		this.tag = tag;
 		// Array of CSS class names (string) on this element.
 		this.classes = classes;
 		// Array of child nodes.
 		this.children = children; // All children are of type Node
 		this.id = id;
 	}

 	/**
 	 * Check if a node is the root node.
 	 *
 	 * @param {Node} node - The node to check.
 	 * @returns {boolean} True if the node is the search node, false otherwise.
 	 * @private
 	 */
 	isSearchNode(node) {
 		return node === this;
 	}

 	/**
 	 * Returns all nodes matching the tag name selector.
 	 *
 	 * For example:
 	 *
 	 * <div>
 	 *   <span id="span-1"></span>
 	 *   <span id="span-2"></span>
 	 *   <div>
 	 *     <span id="span-3"></span>
 	 *   </div>
 	 * </div>
 	 * Selector `span` should return 3 span nodes in this order
 	 * span-1 -> span-2 -> span-3.
 	 *
 	 * @param {string} the selector string.
 	 * @returns {Array} Array of selected nodes.
 	 * @public
 	 */
 	search(selector) {
 		const selectedNodes = [];

 		const matchesSelector = (node, selector) => {
        // Check if the node is not the search node and if it matches the selector.
        if (!this.isSearchNode(node) && (
            // Check if no selector is provided, then select the node.
            !selector ||
            // Check if the selector starts with '#' (ID selector) and the node's ID matches.
            selector.startsWith("#") && node.id === selector.substring(1) ||
            // Check if the selector starts with '.' (class selector) and the node's classes include the selector.
            selector.startsWith(".") && node.classes.includes(selector.substring(1)) ||
            // Check if the node's tag matches the selector (tag selector).
            node.tag === selector
            )) {
                // If any of the conditions above are met, add the node to the selectedNodes array.
                selectedNodes.push(node);
            }
        };


 		const searchRecursively = (node) => {
 			matchesSelector(node, selector);

 			for (const childNode of node.children) {
 				searchRecursively(childNode);
 			}
 		};

 		searchRecursively(this);
 		return selectedNodes;
 	}
 }


 // Create the DOM tree...
 const body = new Node("body", [], ["mainContainer"], "content");
 const div1 = new Node("div", [], ["mainContainer"], "div-1");
 const span1 = new Node("span", [], ["note"], "span-1");
 const span2 = new Node("span", [], [], "span-2");
 const div2 = new Node("div", [], ["subContainer1"], "div-2");
 const para1 = new Node("p", [], ["sub1-p1", "note"], "para-1");
 const span3 = new Node("span", [], ["sub1-span3"], "span-3");
 const div3 = new Node("div", [], ["subContainer2"], "div-3");
 const sec1 = new Node("section", [], [], "sec-1");
 const lbl1 = new Node("label", [], [], "lbl-1");
 const div4 = new Node("div", [], [], "div-4");
 const span4 = new Node("span", [], ["mania"], "span-4");
 const span5 = new Node("span", [], ["note", "mania"], "span-5");
 const span6 = new Node("span", [], ["randomSpan"], "span-6");

 // Construct the DOM tree structure
 body.children = [div1, span6];
 div1.children = [span1, span2, div2, div3, div4];
 div2.children = [para1, span3];
 div3.children = [sec1];
 sec1.children = [lbl1];
 div4.children = [span4, span5];


 // Test the search method with different selectors:
 console.log(div1.search("div"));
 console.log("---------------");
 console.log(div1.search("span"), "tc1"); // Test case 1
 console.log("---------------");
 console.log(div1.search(".note")); // Test case 2
 console.log("---------------");
 console.log(body.search("#span-2"), "tc2.2"); // Test case 2.2
 console.log("---------------");
 console.log(div1.search("label")); // Test case 3
 console.log("---------------");
 console.log(para1.search(".note"), "tc4"); // Test case 4
 console.log("---------------");
 console.log(div1.search("div")); // Test case 5
 console.log("---------------");
 console.log(div4.search("div")); // Test case 6
 console.log("---------------");
 console.log(div2.search("section")); // Test case 7
 console.log("---------------");
 console.log(body.search(), "tc8"); // Test case 8
 console.log("---------------");
 console.log(body.search("section")); // Test case 9
 console.log("---------------");
 console.log(div1.search(".randomSpan"), "tc10"); // Test case 10
 console.log("---------------");
 console.log(body.search(".randomSpan"), "tc10.2"); // Test case 10
 console.log("---------------");
