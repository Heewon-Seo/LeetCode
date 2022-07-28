class UrlNode {
    prev: UrlNode | null;
    next: UrlNode | null;
    curr: string;

    constructor(prev: UrlNode | null, curr: string) {
        this.prev = prev;
        this.next = null;
        this.curr = curr;
    }
}

class BrowserHistory {
    currNode: UrlNode;

    constructor(homepage: string) {
        this.currNode = new UrlNode(null, homepage);
    }

    visit(url: string): void {
        if(this.currNode.next) {
            this.currNode.next.prev = null;
        }
        this.currNode.next = new UrlNode(this.currNode, url);
        this.currNode = this.currNode.next;
    }

    back(steps: number): string {
        for(let i = 0; i < steps; i++) {
            if(this.currNode.prev!==null) this.currNode = this.currNode.prev;
        }
        let url: string = this.currNode.curr;
        // console.log(`**YOU ARE IN ${url}`);
        return url;
    }

    forward(steps: number): string {
        for(let i = 0; i < steps; i++) {
            if(this.currNode.next!==null) this.currNode = this.currNode.next;
        }
        let url: string = this.currNode.curr;
        // console.log(`**YOU ARE IN ${url}`);
        return url;
    }
}