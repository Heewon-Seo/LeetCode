class TrieNode { 
    childs: Map<string, TrieNode>;
    isLast: boolean;

    constructor() {
        this.childs = new Map<string, TrieNode>();
        this.isLast=false;
    }
}

class Trie {
    header: TrieNode;

    constructor() {
        this.header = new TrieNode();
    }

    insert(word: string): void {
        let curNode = this.header;
        for(const char of word){
            if(!curNode.childs.has(char)){
                curNode.childs.set(char, new TrieNode());
            }
            curNode = curNode.childs.get(char);
        }
        curNode.isLast=true;
    }

    search(word: string): boolean {
        let curNode = this.header;
        for(const char of word){
            if(!curNode.childs.has(char)){
                return false;
            }
            curNode = curNode.childs.get(char);
        }
        return curNode.isLast;
    }

    startsWith(prefix: string): boolean {
        let curNode = this.header;
        for(const char of prefix){
            if(!curNode.childs.has(char)){
				return false;
            }
			curNode = curNode.childs.get(char);
        }
        return true;
    }
}

/*
["Trie","insert","search","search","startsWith","insert","search"]
[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]
 */

