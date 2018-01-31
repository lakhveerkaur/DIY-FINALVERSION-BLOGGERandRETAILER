import React, {Component} from 'react';
import ReactDOM from "react-dom";
import request from 'superagent';
import {Grid, Dropdown ,Label, Form, Input ,Button} from "semantic-ui-react";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';


class AddStores extends React.Component {
  constructor (props) {
      super(props);
      this.state = { country: '', region: '' ,store: [],open:false,result:''};

    }

    selectCountry (val) {
      this.setState({ country: val },function(){
        console.log(this.state.country,"country");
      });
    }

    selectRegion (val) {
      this.setState({ region: val },function()
    {
      console.log(this.state.region,"region");
    });
    }

    storeDetails(event){
      let storeValue = event.target.value;
      this.setState({store:storeValue},function()
      {
        console.log(this.state.store,"store");
      });
    }

    handleSubmit(){
      if(this.state.store==''||this.state.region == ''||this.state.country == ''){
        alert('Please fill all the details');
      }
      else{
          let context = this;
          request.post('/addStore')
          .query({country:context.state.country,
              region:context.state.region,
              store:context.state.store})
          .end((err, res)=>{
            if (err) {
            alert('There is some error');
            } else {
              //alert('Store successfully added ');
              console.log(res,"for alert------");
              alert(res.text);
            }
          });

        }
      }

    render () {
      const { country, region } = this.state;

      return (
        <div>

           <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column >
                <Label style={{backgroundColor:'#333f50',color:'#fbe5d6',fontSize:'12pt',fontFamily:'Poor Richard'}}>Select the country</Label>
              </Grid.Column>
              <Grid.Column>
                <CountryDropdown
                defaultOptionLabel='Select your country'
                value={this.state.country}

                onChange={(val) => this.selectCountry(val)} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column >
                <Label style={{backgroundColor:'#333f50',color:'#fbe5d6',fontSize:'12pt',fontFamily:'Poor Richard'}}>Select the state</Label>
              </Grid.Column>
              <Grid.Column>
                <RegionDropdown
                blankOptionLabel='No country selected'
                defaultOptionLabel='Now select your state'
                country={country}
                placeholder='select state'
                value={this.state.region}
                onChange={(val) => this.selectRegion(val)} />
             </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column >
                <Label style={{backgroundColor:'#333f50',color:'#fbe5d6',fontSize:'12pt',fontFamily:'Poor Richard'}}>Enter the store</Label>
              </Grid.Column>
              <Grid.Column >
                <Input style={{width:'95%',backgroundColor:'#333f50'}} placeholder='Store' required="true" onChange={this.storeDetails.bind(this)}/>
             </Grid.Column>
            </Grid.Row>
            <Grid.Row>
               <Button color='#e78c6f' style={{marginLeft:'35%'}} onClick={this.handleSubmit.bind(this)}>Submit</Button>
            </Grid.Row>
          </Grid>

        </div>
      );
    }
  }
export default AddStores;
