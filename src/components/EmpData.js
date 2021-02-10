import React from 'react';
import Data from '../emp.json';

function EmpData() {
    return (
        <div className="emp">
          <div className="posts">
            {Data.map(post => {
              return(
                <div className="table">
                    <table>
                        <td>{post.id}</td>
                        <td>{post.name}</td>
                        <td>{post.age}</td>
                        <td>{post.gender}</td>
                        <td>{post.email}</td>
                        <td>{post.phoneNo}</td>
                    </table>
                </div>
              )
            })}
          </div>
        </div>
      );
    }

export default EmpData;
