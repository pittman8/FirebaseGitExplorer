import React from 'react';

class Go extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 'bar'
        };
    }

    setFooData = json => {
        console.log('parsed json', json);
        this.setState(json);
    };

    elfQuery = (url, setData, event) => {
        console.log(event.target);
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(json => {
                setData(json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    render() {
        return (
            <div>
                <h1>React and Jest</h1>
                <p>Hello {this.state.result}</p>
                <button
                    id="foobar"
                    onClick={e => this.elfQuery('/foo', this.setFooData, e)}
                >
                    Query Foo
                </button>
                <button
                    id="barbar"
                    onClick={e => this.elfQuery('/bar', this.setFooData, e)}
                >
                    Query Bar
                </button>
            </div>
        );
    }
}

export default Go;
